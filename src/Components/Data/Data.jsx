import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Data = () => {
    const [category, setCategory] = useState({});

    const categories = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    useEffect(() => {


        const findData = categories?.categories?.find((data) => data.id === idInt);
        setCategory(findData);

    }, [categories, idInt]);

    const { title, image, background_color,
        button_text, button_background_color, button_text_color, } = category;


    return (
        <>

            <div className="rounded-md my-16 pb-12 flex flex-col gap-4" style={{ backgroundColor: background_color }}>

                <div>
                    <img className="w-full rounded-md" src={image} alt="" />
                </div>

                <div>
                    <h3 className='' style={{
                        backgroundColor: button_background_color,
                        color: button_text_color
                    }}>{button_text}</h3>
                    <h3 className='mx-4' style={{ color: button_text_color }}>{title}</h3>
                </div>
            </div>
        </>
    );
};

export default Data;
