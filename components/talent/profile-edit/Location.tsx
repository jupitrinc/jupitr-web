import React, { useEffect, useState } from "react"
import { useUserState } from "state/user/useUserState"
import { Multiselect } from "ui-library/form/multiselect/Multiselect"
import { useDebounce } from "helper/hooks/useDebounce"
import locationService from "services/location/locationService"
import { useUserAction } from "state/user/useUserAction"
import { ICity } from "state/location/location.types"
import SectionVisibility from "./SectionVisibility"
import { Label } from "ui-library/form/label/Label"

const Location = () => {
  const { user } = useUserState()
  const [cities, setCities] = useState<ICity[]>([])
  const { updateLocation } = useUserAction()
  const { searchCities } = locationService()

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

  const saveLocation = (location: ICity) => {
    updateLocation(user.id, location)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="" value="Location" />
        <SectionVisibility section="location" />
      </div>
      <Multiselect
        placeholder={user.location?.name ?? "Search cities"}
        options={cities}
        onChange={(searchKeyword) => setSearchQuery(searchKeyword)}
        onSelect={(location) => saveLocation(location as ICity)}
        loading={searchQueryLoading}
      />
    </div>
  )
}

export default Location
