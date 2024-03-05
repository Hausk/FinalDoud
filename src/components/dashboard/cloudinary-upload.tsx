import { CldUploadButton } from 'next-cloudinary';
 
<CldUploadButton
  className='btn'
  onUpload={(error: any, result: any, widget: any) => {
    setResource(result?.info); // Updating local state with asset details
    widget.close(); // Close widget immediately after successful upload
  }}
  signatureEndpoint="/api/sign-cloudinary-params"
  uploadPreset="next-cloudinary-signed"
>
  Upload to Cloudinary
</CldUploadButton>