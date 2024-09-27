import { useLocation, useNavigate, Location } from 'react-router';
import qs from 'qs';

export const parseOptions: qs.IParseOptions = {
  allowDots: true,
  ignoreQueryPrefix: true,
  plainObjects: true,
  strictNullHandling: true,
};

const stringifyOptions: qs.IStringifyOptions = {
  addQueryPrefix: true,
  allowDots: true,
  arrayFormat: 'indices',
  encodeValuesOnly: true,
  skipNulls: true,
};

export function parseParams<T extends object>(
  location: Location,
  typeMap?: UseQueryStringStateOptions<T>['typeMap'],
): T {
  const parsed = {
    ...qs.parse(location.search, parseOptions),
  };

  if (typeMap) {
    for (let [key, type] of Object.entries(typeMap)) {
      if (parsed[key]) {
        switch (type) {
          case 'number':
            parsed[key] = Number(parsed[key]);
            break;
        }
      }
    }
  }

  return parsed as T;
}

type TypeMapType<T extends object> = { [K in keyof T]?: string };

type UseQueryStringStateOptions<T extends object> = {
  typeMap: TypeMapType<T>;
};

export function useQueryStringState<T extends object>(
  defaultState: Partial<T> = {},
  options?: UseQueryStringStateOptions<T>,
) {
  const location = useLocation();
  const navigate = useNavigate();

  const state = {
    ...defaultState,
    ...parseParams(location, options?.typeMap),
  };

  const setState = (newState: Partial<T>) => {
    const newQuery = qs.stringify({ ...state, ...newState }, stringifyOptions);

    if (newQuery != location.search) {
      navigate(location?.pathname + newQuery);
    }
  };

  return [state as T, setState] as const;
}
