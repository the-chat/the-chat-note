import { AllUserData } from "@the-chat/use-user"
import { Note } from "types"
import { BaseUserData } from "@the-chat/types"

declare module "@the-chat/use-user" {
  export const useUser: () => AllUserData<
    BaseUserData & {
      notes: Note[]
    }
  >
}
