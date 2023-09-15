import { FunctionsHttpError } from "@supabase/supabase-js"

export const getError = async (
  error: unknown,
  functionName: string
): Promise<{ message: string }> => {
  if (error instanceof FunctionsHttpError) {
    const customError = await error.context.json()
    console.error(`${functionName} - FunctionsHttpError: `, customError)

    if (customError.message) return customError
    else return error
  } else {
    console.error(`${functionName}: `, error)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return error
  }
}
