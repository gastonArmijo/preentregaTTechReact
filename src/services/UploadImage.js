const IMBGG_API_KEY = "82846b055d01507acb540c632937d951";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const UploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await fetch(`${ENDPOINT}?key=${IMBGG_API_KEY}`, {
            method: "POST",
            body: formData,
        });
        
        const data = await response.json();

        if (!data.success) {
            throw new Error("Error al subir la imagen");
        }

        return data.data.url;

    } catch (error) {
        console.error("Imgbb error:", error);
        throw error;
    }
};