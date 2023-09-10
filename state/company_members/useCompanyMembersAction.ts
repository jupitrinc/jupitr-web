import { useContext } from "react"
import { CompanyMembersContext } from "./CompanyMembersContext"
import useCompanyMemberService from "services/company/useCompanyMemberService"
import {
  AddCompanyMemberPayload,
  CompanyMembersActionEnum,
  DeleteCompanyMemberPayload,
  ICompanyMember,
  UpdateRolePayload,
} from "./companyMembers.types"
import { ISuperUser } from "state/user/user.types"

export function useCompanyMembersAction() {
  const { dispatch } = useContext(CompanyMembersContext)
  const {
    getMembers: getMembersService,
    updateMembersPermission: updateRoleService,
    addMember: addMemberService,
    deleteMember: deleteMemberService,
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
        payload: data as ICompanyMember,
      })
    }
  }

  const addMember = async (payload: AddCompanyMemberPayload) => {
    if (!payload.company_id || !payload.email || !payload.permission) return

    dispatch({
      type: CompanyMembersActionEnum.ADD_MEMBER_BEGIN,
    })

    const { data, error } = await addMemberService(payload)

    if (error) {
      dispatch({
        type: CompanyMembersActionEnum.ADD_MEMBER_FAILURE,
        payload: error.message,
      })
    } else {
      dispatch({
        type: CompanyMembersActionEnum.ADD_MEMBER_SUCCESS,
        payload: "Member invited",
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
      dispatch({
        type: CompanyMembersActionEnum.UPDATE_MEMBER_ROLE_SUCCESS,
        payload: data as ICompanyMember[],
      })
    }
  }

  const deleteMember = async (payload: DeleteCompanyMemberPayload) => {
    if (!payload.company_id || !payload.user_id) return

    dispatch({
      type: CompanyMembersActionEnum.DELETE_MEMBER_BEGIN,
    })

    const { data, error } = await deleteMemberService(payload)

    if (error) {
      dispatch({
        type: CompanyMembersActionEnum.DELETE_MEMBER_FAILURE,
        payload: error.message,
      })
    } else {
      dispatch({
        type: CompanyMembersActionEnum.DELETE_MEMBER_SUCCESS,
        payload: payload.user_id as ICompanyMember["user_id"],
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
    deleteMember,
    addMember,
    clearMembers,
  }
}
