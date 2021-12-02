import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useColors = () => {
  const { data, error } = useSWR(`/api/colors`, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    colors: data,
    isLoading: !error && !data,
    isError: error,
  };
};
