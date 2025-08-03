import { SinglePropertyDeatils } from "@/component/properties/SinglePropertyDetails"
import { SinglePropertyImageSection } from "@/component/properties/SinglePropertyImageSection"
import { usePropertyById } from "@/services/properties/PropertyQueries";
import { useParams } from "next/navigation";

export const SinglePropertyPage = () => {
    const params = useParams<{ id: string }>();
    const propertyId = params?.id;

    const { data: property, isLoading, error } = usePropertyById(propertyId);

    if (isLoading) return <p>Loading...</p>;
    if (error || !property) return <p>Error loading property.</p>;

    return (
        <div className="padding7">
            <SinglePropertyImageSection property={property.data} />
            <SinglePropertyDeatils property={property.data} />
        </div>
    );
}