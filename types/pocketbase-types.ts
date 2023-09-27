/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Role = "role",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type RoleRecord = {
	name?: string
	role?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
	role?: RecordIdString
}

// Response types include system fields and match responses from the PocketBase API
export type RoleResponse<Texpand = unknown> = Required<RoleRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	role: RoleRecord
	users: UsersRecord
}

export type CollectionResponses = {
	role: RoleResponse
	users: UsersResponse
}