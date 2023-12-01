import type { Writable } from "svelte/store"
import { Language } from "../store/store"


export type SessionData = {language: Language}
export type SessionStore = Writable<SessionData>

export const getSession = () => {
    const language = Language.Russian
    return {language}
}