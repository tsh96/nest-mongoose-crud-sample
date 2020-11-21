/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class DogsService {
  /**
   *
   */
  static createOne(
    params: {
      /** requestBody */
      body?: CreateDogDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Dog[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dogs';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static findMany(
    params: {
      /**  */
      select?: any | null[];
      /**  */
      sort?: any | null[];
      /**  */
      skip?: number;
      /**  */
      limit?: number;
      /**  */
      filter?: FilterDogDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Dog> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dogs';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        select: params['select'],
        sort: params['sort'],
        skip: params['skip'],
        limit: params['limit'],
        filter: params['filter']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateMany(
    params: {
      /**  */
      filter: FilterDogDto;
      /** requestBody */
      body?: UpdateDogDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdateManyResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dogs';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);
      configs.params = { filter: params['filter'] };
      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static deleteMany(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DeleteManyResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dogs';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createMany(
    params: {
      /** requestBody */
      body?: CreateDogDto[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Dog[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dogs/bulk';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static findById(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Dog> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dogs/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateOne(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateDogDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdateOneResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dogs/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static deleteById(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DeleteByIdResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/dogs/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class PuppiesService {
  /**
   *
   */
  static createOne(
    params: {
      /** requestBody */
      body?: CreatePuppyDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Puppy[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/puppies';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static findMany(
    params: {
      /**  */
      select?: any | null[];
      /**  */
      sort?: any | null[];
      /**  */
      skip?: number;
      /**  */
      limit?: number;
      /**  */
      filter?: UpdatePuppyDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Puppy> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/puppies';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        select: params['select'],
        sort: params['sort'],
        skip: params['skip'],
        limit: params['limit'],
        filter: params['filter']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateMany(
    params: {
      /**  */
      filter: UpdatePuppyDto;
      /** requestBody */
      body?: UpdatePuppyDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdateManyResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/puppies';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);
      configs.params = { filter: params['filter'] };
      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static deleteMany(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DeleteManyResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/puppies';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createMany(
    params: {
      /** requestBody */
      body?: CreatePuppyDto[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Puppy[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/puppies/bulk';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static findById(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Puppy> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/puppies/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateOne(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdatePuppyDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdateOneResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/puppies/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static deleteById(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DeleteByIdResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/puppies/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class AccessControlService {
  /**
   *
   */
  static createOne(
    params: {
      /** requestBody */
      body?: CreateAccessControlDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AccessControl[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/access-control';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static findMany(
    params: {
      /**  */
      select?: any | null[];
      /**  */
      sort?: any | null[];
      /**  */
      skip?: number;
      /**  */
      limit?: number;
      /**  */
      filter?: FilterAccessControlDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AccessControl> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/access-control';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        select: params['select'],
        sort: params['sort'],
        skip: params['skip'],
        limit: params['limit'],
        filter: params['filter']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateMany(
    params: {
      /**  */
      filter: FilterAccessControlDto;
      /** requestBody */
      body?: UpdateAccessControlDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdateManyResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/access-control';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);
      configs.params = { filter: params['filter'] };
      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static deleteMany(
    params: {
      /** requestBody */
      body?: any | null[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DeleteManyResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/access-control';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static createMany(
    params: {
      /** requestBody */
      body?: CreateAccessControlDto[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AccessControl[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/access-control/bulk';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static findById(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AccessControl> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/access-control/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static updateOne(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateAccessControlDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UpdateOneResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/access-control/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static deleteById(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DeleteByIdResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/access-control/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface CreateDogDto {
  /**  */
  name: string;

  /**  */
  age: number;

  /**  */
  breed: string;
}

export interface Dog {
  /**  */
  name: string;

  /**  */
  age: number;

  /**  */
  breed: string;

  /**  */
  _id: string;
}

export interface FilterDogDto {
  /**  */
  name?: string;

  /**  */
  age?: number;

  /**  */
  breed?: string;
}

export interface UpdateDogDto {
  /**  */
  name?: string;

  /**  */
  age?: number;

  /**  */
  breed?: string;
}

export interface UpdateOneResponse {
  /**  */
  n: number;

  /**  */
  nModified: number;

  /**  */
  ok: number;
}

export interface UpdateManyResponse {}

export interface DeleteByIdResponse {}

export interface DeleteManyResponse {}

export interface CreatePuppyDto {
  /**  */
  name: string;
}

export interface Puppy {
  /**  */
  name: string;

  /**  */
  _id: string;
}

export interface UpdatePuppyDto {
  /**  */
  name?: string;
}

export interface CreateAccessControlDto {
  /**  */
  role: string;

  /**  */
  permissions: string[];
}

export interface AccessControl {
  /**  */
  role: string;

  /**  */
  permissions: string[];

  /**  */
  _id: string;
}

export interface FilterAccessControlDto {
  /**  */
  role: string;
}

export interface UpdateAccessControlDto {
  /**  */
  role: string;
}
