import {DefaultCrudRepository} from '@loopback/repository';
import {Learningcategory, LearningcategoryRelations} from '../models';
import {CategorydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LearningcategoryRepository extends DefaultCrudRepository<
  Learningcategory,
  typeof Learningcategory.prototype.title,
  LearningcategoryRelations
> {
  constructor(
    @inject('datasources.categorydb') dataSource: CategorydbDataSource,
  ) {
    super(Learningcategory, dataSource);
  }
}
