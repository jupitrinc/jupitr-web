import { FunctionsHttpError } from "@supabase/supabase-js"

export const errorHandlingEdgeFunctions = async (
  error: unknown,
  functionName: string
) => {
  if (error instanceof FunctionsHttpError) {
    const errorMessage = await error.context.json()
    console.error(`${functionName} - FunctionsHttpError: `, errorMessage)
    return errorMessage
  } else {
    console.error(`${functionName}: `, error)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return error.message
  }
}
