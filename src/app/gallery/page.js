import Image from "next/image";
import nextImage from "../assets/laptop.jpg"



const ImageGallery = () => {
    return (
        <div className="mx-auto">
                   <Image  src="https://computermania-bd.b-cdn.net/wp-content/uploads/Lenovo-Ideapad-4-14.jpg" alt="Barun Nafak" className="mx-auto"
            height={500}
            width={500}/>

            <h3 className="text-3xl text-center">Local Image</h3>
                   <Image  src={nextImage} alt="Barun Nafak" className="mx-auto"
            height={500}
            width={500}/>
        </div>
    );
};

export default ImageGallery;