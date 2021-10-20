import {Entity, model, property} from '@loopback/repository';

@model()
export class UsuarioRoles extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  id_usuario?: string;

  @property({
    type: 'string',
  })
  id_rol?: string;

  constructor(data?: Partial<UsuarioRoles>) {
    super(data);
  }
}

export interface UsuarioRolesRelations {
  // describe navigational properties here
}

export type UsuarioRolesWithRelations = UsuarioRoles & UsuarioRolesRelations;
