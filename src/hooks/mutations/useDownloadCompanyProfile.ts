import {
  useMutation,
} from "@tanstack/react-query";

import {
  downloadCompanyProfile,
} from "../../services/companyProfileService";

export const useDownloadCompanyProfile =
  () => {
    return useMutation({
      mutationFn:
        downloadCompanyProfile,
    });
  };