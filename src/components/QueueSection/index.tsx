/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  AlertCircle,
  CircleMinus,
  CirclePlus,
  Clock,
  Loader2,
} from "lucide-react";
import { formatDate } from "@/utils/formatDate";
import { useBarbershop } from "@/contexts/BarberShop";

interface QueueSectionProps {
  open: boolean;
  user: any;
}

const QueueSection = ({ open, user }: QueueSectionProps) => {
  const [isLoadingActionQueue, setIsLoadingActionQueue] = useState(false);
  const { addToQueue, isAdmin, removeFromQueue, queue } = useBarbershop();

  const isLoadingQueue = queue === undefined;

  const userInQueue = queue?.find((item) => item.user.id === user?.id);

  const [previousPosition, setPreviousPosition] = useState<number | null>(null);

  const sendNotification = (title: string, message: string) => {
    if (Notification.permission === "granted") {
      new Notification(title, {
        body: message,
        icon: "/icon.png",
      });
    } else {
      console.log("Notificações não permitidas pelo usuário.");
    }
  };

  useEffect(() => {
    if (userInQueue) {
      const currentPosition = userInQueue.position;

      if (
        previousPosition !== null && // Evita notificação inicial
        currentPosition < previousPosition // Mudança para uma posição mais alta
      ) {
        sendNotification(
          "Atualização na Fila",
          `Sua posição na fila mudou: agora você é o #${currentPosition}º!`
        );
      }

      setPreviousPosition(currentPosition);
    }
  }, [previousPosition, userInQueue, userInQueue?.position]); // Escute mudanças na posição

  if (isLoadingQueue) {
    // Skeleton enquanto carrega
    return (
      <div className="bg-[#0f0f0f] rounded-xl border border-amber-900/20 shadow-lg overflow-hidden">
        <div className="p-4 md:p-6">
          <div className="mb-6">
            <div className="w-1/2 h-6 bg-gray-800 rounded animate-pulse mb-4"></div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-800 rounded-full animate-pulse"></div>
              <div className="w-1/3 h-4 bg-gray-800 rounded animate-pulse"></div>
            </div>
          </div>
          {/* Skeleton de cards */}
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-900 rounded shadow-md animate-pulse"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                  <div>
                    <div className="w-32 h-4 bg-gray-800 rounded mb-2"></div>
                    <div className="w-24 h-3 bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const handleOnClick = () => {
    setIsLoadingActionQueue(true);
    if (!userInQueue) {
      addToQueue();
    } else {
      removeFromQueue(userInQueue.id);
    }
    setIsLoadingActionQueue(false);
    console.log(isLoadingActionQueue);
  };

  return (
    <div className="bg-[#0f0f0f] rounded-xl border border-amber-900/20 shadow-lg overflow-hidden">
      <div className="p-4 md:p-6">
        {open ? (
          <>
            {/* Status Bar */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between pb-4 rounded-lg  shadow-sm">
              <p className="text-lg md:text-xl font-semibold text-zinc-200">
                Fila Atual
              </p>
              <div className="flex items-center gap-2 text-sm text-zinc-400 mt-2 sm:mt-0">
                <Clock className="h-4 w-4" />
                atualizado em tempo real
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 bg-[#1a1a1a] p-3 md:p-4 rounded-lg border border-amber-900/10">
              <div className="flex items-center gap-3 mb-3 sm:mb-0">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-zinc-200 font-medium text-sm md:text-base">
                    {queue.length === 0 ? (
                      "Nenhum cliente na fila"
                    ) : (
                      <>
                        {queue.length} cliente{queue.length !== 1 && "s"} na
                        fila
                      </>
                    )}
                  </p>
                  {userInQueue && (
                    <p className="text-sm text-zinc-400 mt-0.5">
                      Sua posição:{" "}
                      <span className="text-amber-500">
                        #{userInQueue.position}º
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <Button
                onClick={handleOnClick}
                size="default"
                className={`w-full sm:w-auto ${
                  userInQueue
                    ? "bg-red-500/10 text-red-400 hover:bg-red-500/20"
                    : "bg-amber-500 text-black hover:bg-amber-400"
                } transition-colors text-sm md:text-base`}
              >
                {isLoadingActionQueue && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {userInQueue ? (
                  <>
                    <CircleMinus className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Sair da fila
                  </>
                ) : (
                  <>
                    <CirclePlus className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Entrar na fila
                  </>
                )}
              </Button>
            </div>

            {/* Tolerance Notice */}
            {queue?.length > 0 && (
              <div className="mb-6 bg-amber-500/5 border border-amber-500/20 rounded-lg p-3 md:p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-amber-500 font-medium text-sm md:text-base">
                      Atenção
                    </p>
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                      Fique atento quando chegar sua vez na fila. Caso você não
                      esteja presente quando for chamado, sua vez poderá ser
                      passada para o próximo cliente.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Client List */}
            <div className="space-y-3">
              {queue?.length > 0
                ? queue?.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-[#1a1a1a] p-3 md:p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-amber-900/10 ${
                        item.user.id === user?.id ? "" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="bg-amber-500/10 h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center">
                          <span className="text-amber-500 font-medium text-sm md:text-base">
                            #{item.position}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-zinc-200 font-medium text-sm md:text-base">
                              {item.user.name}
                            </span>
                            {item.user.id === user?.id && (
                              <Badge className=" px-1 py-0 bg-amber-500 text-black text-xs hover:text-white">
                                Você
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs md:text-sm text-zinc-500 mt-0.5">
                            Entrou em: {formatDate(item.createdAt)}
                          </p>
                        </div>
                      </div>
                      {isAdmin && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10 text-sm w-full sm:w-auto"
                          onClick={() => removeFromQueue(item.id)}
                        >
                          Remover
                        </Button>
                      )}
                    </div>
                  ))
                : null}
            </div>
          </>
        ) : (
          <div className="text-center py-8 md:py-12">
            <div className="bg-red-500/10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-red-400" />
            </div>
            <p className="text-zinc-300 font-medium text-sm md:text-base">
              A barbearia está fechada
            </p>
            <p className="text-xs md:text-sm text-zinc-500 mt-1">
              Volte mais tarde
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueueSection;
