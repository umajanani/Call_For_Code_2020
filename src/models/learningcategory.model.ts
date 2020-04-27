import {Entity, model, property} from '@loopback/repository';

@model()
export class Learningcategory extends Entity {
  @property({
    type: 'number',
    title: true,
    generated: false,
  })
  title?: number;

  @property({
    id: true,
    type: 'number',
    required: true,
  })
  category: number;

  @property({
    type: 'string',
    required: true,
  })
  categoryname: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;
  /* @property({
     type: 'string',
   })
   remindAtAddress?: string; // address,city,zipcode
 
   @property({
     type: 'string',
   })
   remindAtGeo?: string; // latitude,longitude*/

  constructor(data?: Partial<Learningcategory>) {
    super(data);
  }
}

export interface LearningcategoryRelations {
  // describe navigational properties here
}

export type LearningcategoryWithRelations = Learningcategory & LearningcategoryRelations;
