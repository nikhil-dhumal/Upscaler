import publicClient from "../clients/public.client"

const enhanceEndpoints = {
  enhance: "/enhance"
}

const enhanceApi = {
  enhance: async ({ image }) => {
    try {
      const formData = new FormData()
      formData.append("image", image)

          const response = await publicClient.post(enhanceEndpoints.enhance, formData)

          return { response }
      } catch (err) {
          return { err }
      }
  }
}

export default enhanceApi