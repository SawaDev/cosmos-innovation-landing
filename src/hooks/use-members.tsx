import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

export interface Member {
  name: string;
  role: string;
  photo_url: string;
  description: string;
  telegram_url?: string;
  github_url?: string;
  linkedin_url?: string;
  instagram_url?: string;
  facebook_url?: string;
  twitter_url?: string;
  youtube_url?: string;
  website_url?: string;
  email?: string;
}

// Hook to fetch all members
export const useMembers = () => {
  return useQuery({
    queryKey: ["home", "get-all-members"],
    queryFn: async () => {
      const { data } = await api.get<Member[]>("/home/get-all-members");
      return data;
    },
  });
};
