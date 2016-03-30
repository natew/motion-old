/* @flow */

export type Motion$Config = {
  rootDirectory: string,
  // Optional
  dataDirectory: string
}

export type Motion$State = {
  running: boolean,
  process_id: number,
  web_server_port: number,
  websocket_server_port: number,
  npm_save: boolean
}

export type Motion$StateConfig = {
  include_polyfills: boolean
}
