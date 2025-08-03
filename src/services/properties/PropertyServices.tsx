import axiosInstance from "../Api";

export const fetchPropertyList = async (data: { pageLimit?: number; search?: string }) => {
    console.log('fetchPropertyList called with data:', data);
    const pageLimit = data?.pageLimit || 1;
    const search = data?.search || '';
    const response = await axiosInstance.get(`/v1/properties/?search[title]=${search}&page=${pageLimit}`);
    return response.data;
}
export const fetchMlsSearchPropertyList = async (
    data: { pageLimit?: number; keyword?: string;property_status:string;property_type:string;
        property_for?: string; category_type?: string; price_min?: number; price_max?: number;
        bed_min?: number; bed_max?: number; bath_min?: number; bath_max?: number;
        garage_min?: number; garage_max?: number; square_footage_min?: number;
        square_footage_max?: number; lot_size_min?: number; lot_size_max?: number;
        year_built_min?: number; year_built_max?: number; max_annual_tax?: number;
        stories?: number; premium?: boolean; exclusive?: boolean; price_on_request?: boolean;
        construction_status?: string; furnishing?: string; available_from?: string;
        rented?: boolean; mls_city?: string; mls_state?: string; zip?: string;
        mls_basement?: string; mls_sewer?: string; mls_school_district?: string;
        mls_builder_name?: string; mls_list_agent?: string; mls_site_features?: string;
        mls_lot_feature?: string;page?: number;community_amenities?: string;property_view?: string;
        interior_features?: string;

     }) => {
    console.log('fetchPropertyList called with data:', data);
    const property_status=data?.property_status || '';
    const keyword=data?.keyword || '';
    const response = await axiosInstance.get(`/v1/properties/search?search[keyword]=${keyword}&search[property_status]=${property_status}&search[property_type]=${data?.property_type || ''}&search[property_for]=${data?.property_for || ''}&search[category_type]=${data?.category_type || ''}&search[price_min]=${data?.price_min || ''}&search[price_max]=${data?.price_max || ''}&search[bed_min]=${data?.bed_min || ''}&search[bed_max]=${data?.bed_max || ''}&search[bath_min]=${data?.bath_min || ''}&search[bath_max]=${data?.bath_max || ''}&search[garage_min]=${data?.garage_min || ''}&search[garage_max]=${data?.garage_max || ''}&search[square_footage_min]=${data?.square_footage_min || ''}&search[square_footage_max]=${data?.square_footage_max || ''}&search[lot_size_min]=${data?.lot_size_min || ''}&search[lot_size_max]=${data?.lot_size_max || ''}&search[year_built_min]=${data?.year_built_min || ''}&search[year_built_max]=${data?.year_built_max || ''}&search[max_annual_tax]=${data?.max_annual_tax || ''}&search[stories]=${data?.stories || ''}&search[premium]=${data?.premium || ''}&search[exclusive]=${data?.exclusive || ''}&search[price_on_request]=${data?.price_on_request || ''}&search[construction_status]=${data?.construction_status || ''}&search[furnishing]=${data?.furnishing || ''}&search[available_from]=${data?.available_from || ''}&search[rented]=${data?.rented || ''}&search[mls_city]=${data?.mls_city || ''}&search[mls_state]=${data?.mls_state || ''}&search[zip]=${data?.zip || ''}&search[mls_basement]=${data?.mls_basement || ''}&search[mls_sewer]=${data?.mls_sewer || ''}&search[mls_school_district]=${data?.mls_school_district || ''}&search[mls_builder_name]=${data?.mls_builder_name || ''}&search[mls_list_agent]=${data?.mls_list_agent || ''}&search[mls_site_features]=${data?.mls_site_features || ''}&search[mls_lot_feature]=${data?.mls_lot_feature || ''}&sort_by=featured&pageLimit=${data?.pageLimit || 25}&page=${data?.page || 1}&community_amenities=${data?.community_amenities || ''}&property_view=${data?.property_view || ''}&interior_features=${data?.interior_features || ''}`);
    return response.data;
}
// Add single property fetcher
export const fetchMlsPropertyById = async (id: string) => {
    if (!id) throw new Error("Missing property id");
    const response = await axiosInstance.get(`/v1/property/listingkey/${id}`);
    return response.data;
};
// type PropertySearchParams = {
//     pageLimit?: number;
//     page?: number;
//     keyword?: string;
//     property_status: string;
//     property_type: string;
//     property_for?: string;
//     category_type?: string;
//     price_min?: number;
//     price_max?: number;
//     bed_min?: number;
//     bed_max?: number;
//     bath_min?: number;
//     bath_max?: number;
//     garage_min?: number;
//     garage_max?: number;
//     square_footage_min?: number;
//     square_footage_max?: number;
//     lot_size_min?: number;
//     lot_size_max?: number;
//     year_built_min?: number;
//     year_built_max?: number;
//     max_annual_tax?: number;
//     stories?: number;
//     premium?: boolean;
//     exclusive?: boolean;
//     price_on_request?: boolean;
//     construction_status?: string;
//     furnishing?: string;
//     available_from?: string;
//     rented?: boolean;
//     mls_city?: string;
//     mls_state?: string;
//     zip?: string;
//     mls_basement?: string;
//     mls_sewer?: string;
//     mls_school_district?: string;
//     mls_builder_name?: string;
//     mls_list_agent?: string;
//     mls_site_features?: string;
//     mls_lot_feature?: string;
//     community_amenities?: string;
// };

// export const fetchMlsSearchPropertyList = async (
//     data: PropertySearchParams
// ): Promise<AxiosResponse["data"]> => {
//     const params = new URLSearchParams();

//     // Flattened search keys
//     const searchKeys = {
//         keyword: data.keyword,
//         property_status: data.property_status,
//         property_type: data.property_type,
//         property_for: data.property_for,
//         category_type: data.category_type,
//         price_min: data.price_min,
//         price_max: data.price_max,
//         bed_min: data.bed_min,
//         bed_max: data.bed_max,
//         bath_min: data.bath_min,
//         bath_max: data.bath_max,
//         garage_min: data.garage_min,
//         garage_max: data.garage_max,
//         square_footage_min: data.square_footage_min,
//         square_footage_max: data.square_footage_max,
//         lot_size_min: data.lot_size_min,
//         lot_size_max: data.lot_size_max,
//         year_built_min: data.year_built_min,
//         year_built_max: data.year_built_max,
//         max_annual_tax: data.max_annual_tax,
//         stories: data.stories,
//         premium: data.premium,
//         exclusive: data.exclusive,
//         price_on_request: data.price_on_request,
//         construction_status: data.construction_status,
//         furnishing: data.furnishing,
//         available_from: data.available_from,
//         rented: data.rented,
//         mls_city: data.mls_city,
//         mls_state: data.mls_state,
//         zip: data.zip,
//         mls_basement: data.mls_basement,
//         mls_sewer: data.mls_sewer,
//         mls_school_district: data.mls_school_district,
//         mls_builder_name: data.mls_builder_name,
//         mls_list_agent: data.mls_list_agent,
//         mls_site_features: data.mls_site_features,
//         mls_lot_feature: data.mls_lot_feature,
//     };

//     for (const [key, value] of Object.entries(searchKeys)) {
//         if (value !== undefined && value !== null && value !== '') {
//             params.append(`search[${key}]`, String(value));
//         }
//     }

//     // Other params
//     params.append('sort_by', 'featured');
//     params.append('pageLimit', String(data.pageLimit || 25));
//     params.append('page', String(data.page || 1));

//     const response = await axiosInstance.get(`/properties/search?${params.toString()}`);
//     return response.data;
// };


