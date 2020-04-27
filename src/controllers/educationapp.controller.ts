import {inject} from '@loopback/core';
import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, HttpErrors, param, patch, post, put, requestBody} from '@loopback/rest';
import {Learningcategory} from '../models';
import {LearningcategoryRepository} from '../repositories';
import {Geocoder} from '../services';

export class EducationappController {
  constructor(
    @repository(LearningcategoryRepository)
    public learningcategoryRepository: LearningcategoryRepository,
    @inject('services.Geocoder') protected geoService: Geocoder,
  ) {}

  @post('/learningcategories', {
    responses: {
      '200': {
        description: 'Learningcategory model instance',
        content: {'application/json': {schema: getModelSchemaRef(Learningcategory)}},
      },
    },
  })
  
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Learningcategory, {
            title: 'NewLearningcategory',

          }),
        },
      },
    })
    learningcategory: Omit<Learningcategory, 'id'>,
  ): Promise<Learningcategory> {
    return this.learningcategoryRepository.create(learningcategory);
  }

  @get('/learningcategories/count', {
    responses: {
      '200': {
        description: 'Learningcategory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Learningcategory) where?: Where<Learningcategory>,
  ): Promise<Count> {
    return this.learningcategoryRepository.count(where);
  }

  @get('/learningcategories', {
    responses: {
      '200': {
        description: 'Array of Learningcategory model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Learningcategory, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Learningcategory) filter?: Filter<Learningcategory>,
  ): Promise<Learningcategory[]> {
    return this.learningcategoryRepository.find(filter);
  }

  @patch('/learningcategories', {
    responses: {
      '200': {
        description: 'Learningcategory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Learningcategory, {partial: true}),
        },
      },
    })
    learningcategory: Learningcategory,
    @param.where(Learningcategory) where?: Where<Learningcategory>,
  ): Promise<Count> {
    return this.learningcategoryRepository.updateAll(learningcategory, where);
  }

  @get('/learningcategories/{id}', {
    responses: {
      '200': {
        description: 'Learningcategory model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Learningcategory, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Learningcategory, {exclude: 'where'}) filter?: FilterExcludingWhere<Learningcategory>
  ): Promise<Learningcategory> {
    return this.learningcategoryRepository.findById(id, filter);
  }

  @patch('/learningcategories/{id}', {
    responses: {
      '204': {
        description: 'Learningcategory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Learningcategory, {partial: true}),
        },
      },
    })
    learningcategory: Learningcategory,
  ): Promise<void> {
    await this.learningcategoryRepository.updateById(id, learningcategory);
  }

  @put('/learningcategories/{id}', {
    responses: {
      '204': {
        description: 'Learningcategory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() learningcategory: Learningcategory,
  ): Promise<void> {
    await this.learningcategoryRepository.replaceById(id, learningcategory);
  }

  @del('/learningcategories/{id}', {
    responses: {
      '204': {
        description: 'Learningcategory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.learningcategoryRepository.deleteById(id);
  }
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
}
