import Property from "../components/Property";

function Properties ({properties}) {
    return <div className="flex justify-center flex-wrap">
        {properties.map((property, i) => (
            <Property key={i} property={property}/>
        ))}
    </div>
}

export default Properties