const upload_preset = "TNA-Agencies"

const cloud_name = "dnqrifitm"

// const api_url = `https://api.cloudinary.com/v1_1/demo/image/upload`
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

export const uploadImageToCloudinary = async(file)=> {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    try{
        const res = await fetch(api_url, {
            method:"post",
            body:data
        });

        const fileData = await res.json();

        // Check for error in response
        if (!res.ok) {
            throw new Error('Failed to upload image');
        }
        return fileData.secure_url || fileData.url;
        
    }
    catch(error){
        console.error("Error uploading image:", error);
        return null;
    }
    
}