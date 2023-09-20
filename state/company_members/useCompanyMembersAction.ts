import { useContext } from "react"
import { CompanyMembersContext } from "./CompanyMembersContext"
import companyMemberService from "services/company/companyMemberService"
import {
  AddCompanyMemberPayload,
  CompanyMembersActionEnum,
  DeleteCompanyMemberPayload,
  ICompanyMember,
  UpdateRolePayload,
} from "./companyMembers.types"
import { ISuperUser } from "state/user/user.types"
import { useNotificationAction } from "state/notification/useNotificationAction"

export function useCompanyMembersAction() {
  const { notify } = useNotificationAction()

  const { dispatch } = useContext(CompanyMembersContext)
  const {
    getMembers: getMembersService,
    updateMemberPermission: updateRoleService,
    addMember: addMemberService,
    deleteMember: deleteMemberService,
  } = companyMemberService()

  const getMembers = async (company_id: ISuperUser["company_id"]) => {
    if (!company_id) return

    dispatch({
      type: CompanyMembersActionEnum.GET_MEMBERS_BEGIN,
    })

    const { data, error } = await getMembersService(company_id)

    if (error) {
      dispatch({
        type: CompanyMembersActionEnum.GET_MEMBERS_FAILURE,
      })

      notify({
        message: error.message,
        type: "warning",
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
      })

      notify({
        message: error.message,
        type: "warning",
      })
    } else {
      dispatch({
        type: CompanyMembersActionEnum.ADD_MEMBER_SUCCESS,
      })

      notify({
        message: "Member invited",
        type: "success",
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
      })

      notify({
        message: error.message,
        type: "warning",
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
      })

      notify({
        message: error.message,
        type: "warning",
      })
    } else {
      dispatch({
        type: CompanyMembersActionEnum.DELETE_MEMBER_SUCCESS,
        payload: payload.user_id as ICompanyMember["user_id"],
      })

      notify({
        message: "Member removed",
        type: "success",
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
