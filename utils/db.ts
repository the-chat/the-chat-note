import getDb from "@the-chat/db"
import { db } from "utils/firebase"

export const { update } = getDb(db)
