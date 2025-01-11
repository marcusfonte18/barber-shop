import webpush, { PushSubscription } from "web-push";

webpush.setVapidDetails(
  "mailto:barba.club.barbearia.2010@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? "",
  process.env.VAPID_PRIVATE_KEY ?? ""
);

export const sendNotification = async (
  subscription: PushSubscription,
  title: string,
  message: string
) => {
  const pushPayload: any = {
    title: title,
    body: message,
    icon: "/user.png",
    url: process.env.NOTIFICATION_URL ?? "/",
    badge: "/logo.svg",
  };

  webpush
    .sendNotification(subscription, JSON.stringify(pushPayload))
    .then(() => {
      console.log("Notification sent");
    })
    .catch((error) => {
      console.error("Error sending notification", error);
    });
};