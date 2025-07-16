import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { vehiclesService, SearchParams, Vehicle } from '../services/vehicles';
import { useToast } from './useToast';

export const useVehicles = (params: SearchParams) => {
  return useQuery(['vehicles', params], () => vehiclesService.search(params), {
    keepPreviousData: true,
  });
};

export const useVehicle = (id: string) => {
  return useQuery(['vehicle', id], () => vehiclesService.getById(id));
};

export const useCreateVehicle = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (formData: FormData) => vehiclesService.create(formData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['vehicles']);
        toast.success('Veículo cadastrado com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao cadastrar veículo. Tente novamente.');
      },
    }
  );
};

export const useUpdateVehicle = (id: string) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (formData: FormData) => vehiclesService.update(id, formData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['vehicles']);
        queryClient.invalidateQueries(['vehicle', id]);
        toast.success('Veículo atualizado com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao atualizar veículo. Tente novamente.');
      },
    }
  );
};

export const useDeleteVehicle = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation((id: string) => vehiclesService.delete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['vehicles']);
      toast.success('Veículo excluído com sucesso!');
    },
    onError: () => {
      toast.error('Erro ao excluir veículo. Tente novamente.');
    },
  });
};

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (id: string) => vehiclesService.toggleFavorite(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['vehicles']);
        queryClient.invalidateQueries(['favorites']);
      },
      onError: () => {
        toast.error('Erro ao favoritar veículo. Tente novamente.');
      },
    }
  );
};

export const useFavorites = () => {
  return useQuery(['favorites'], () => vehiclesService.getFavorites());
};

export const usePlaceBid = (vehicleId: string) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (amount: number) => vehiclesService.placeBid(vehicleId, amount),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['vehicle', vehicleId]);
        queryClient.invalidateQueries(['bids', vehicleId]);
        toast.success('Lance realizado com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao realizar lance. Tente novamente.');
      },
    }
  );
};

export const useBids = (vehicleId: string) => {
  return useQuery(['bids', vehicleId], () =>
    vehiclesService.getBids(vehicleId)
  );
};

export const useQuestions = (vehicleId: string) => {
  return useQuery(['questions', vehicleId], () =>
    vehiclesService.getQuestions(vehicleId)
  );
};

export const useAskQuestion = (vehicleId: string) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    (question: string) => vehiclesService.askQuestion(vehicleId, question),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['questions', vehicleId]);
        toast.success('Pergunta enviada com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao enviar pergunta. Tente novamente.');
      },
    }
  );
};

export const useAnswerQuestion = (vehicleId: string) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation(
    ({ questionId, answer }: { questionId: string; answer: string }) =>
      vehiclesService.answerQuestion(vehicleId, questionId, answer),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['questions', vehicleId]);
        toast.success('Resposta enviada com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao enviar resposta. Tente novamente.');
      },
    }
  );
}; 