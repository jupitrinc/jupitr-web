import { useContext } from "react"
import { CompanyMembersContext } from "./CompanyMembersContext"
import useCompanyMemberService from "services/company/useCompanyMemberService"
import {
  CompanyMembersActionEnum,
  ICompanyMember,
  UpdateRolePayload,
} from "./companyMembers.types"
import { ISuperUser } from "state/user/user.types"

export function useCompanyMembersAction() {
  const { dispatch } = useContext(CompanyMembersContext)
  const {
    getMembers: getMembersService,
    updateMembersPermission: updateRoleService,
  } = useCompanyMemberService()

  const getMembers = async (company_id: ISuperUser["company_id"]) => {
    if (!company_id) return

    dispatch({
      type: CompanyMembersActionEnum.GET_MEMBERS_BEGIN,
    })

    const { data, error } = await getMembersService(company_id)

    if (error) {
      dispatch({
        type: CompanyMembersActionEnum.GET_MEMBERS_FAILURE,
        payload: error.message,
      })
    } else {
      dispatch({
        type: CompanyMembersActionEnum.GET_MEMBERS_SUCCESS,
        payload: data as ICompanyMember[],
      })
    }
  }

  const updateRole = async (payload: UpdateRolePayload) => {
    if (!payload.company_id || !payload.user_id || !payload.permission) return

    dispatch({
      type: CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_BEGIN,
    })

    const { data, error } = await updateRoleService(payload)

    if (error) {
      dispatch({
        type: CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_FAILURE,
        payload: error.message,
      })
    } else {
      console.log(data)
      dispatch({
        type: CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_SUCCESS,
        payload: data as ICompanyMember[],
      })
    }
  }

  const clearMembers = () => {
    dispatch({
      type: CompanyMembersActionEnum.CLEAR_MEMBERS,
    })
  }

  return {
    getMembers,
    updateRole,
    clearMembers,
  }
}
