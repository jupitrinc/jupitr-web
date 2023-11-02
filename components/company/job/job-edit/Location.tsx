import React, { useCallback, useEffect, useState } from "react"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { useCompanyJobState } from "state/company_job/useCompanyJobState"
import { useCompanyJobAction } from "state/company_job/useCompanyJobAction"
import locationService from "services/location/locationService"
import { useDebounce } from "helper/hooks/useDebounce"
import { ICity } from "state/location/location.types"

const Location = () => {
  const { company_job } = useCompanyJobState()
  const [cities, setCities] = useState<ICity[]>([])
  const { searchCities } = locationService()
  const { updateLocation } = useCompanyJobAction()

  const {
    debouncedValue: searchQuery,
    setDebouncedValue: setSearchQuery,
    loading: searchQueryLoading,
  } = useDebounce()

  const searchLocation = async (searchKeyword: string) => {
    const { data } = await searchCities(searchKeyword)

    if (data) {
      const options = data.map((city: ICity) => {
        return { ...city, name: `${city.name}, ${city.country.name}` }
      })

      setCities(options)
    }
  }

  useEffect(() => {
    if (searchQuery !== "") {
      searchLocation(searchQuery)
    }
  }, [searchQuery])

  const update = useCallback(
    (location: ICity) => {
      if (!location.id) return
      updateLocation(company_job.id, location)
    },
    [company_job.id]
  )

  return (
    <Multiselect
      label="Location"
      placeholder={company_job.location?.name ?? "Search city"}
      options={cities}
      onChange={(searchKeyword) => setSearchQuery(searchKeyword)}
      onSelect={(location) => update(location as ICity)}
      loading={searchQueryLoading}
    />
  )
}

export default Location
