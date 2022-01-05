import {useState} from "react";
import {filterData, getFilterValues} from "../data/filter.data";
import Select from 'react-select'
import {useRouter} from "next/router";

function SearchFilter() {
    const [filters] = useState(filterData)
    const router = useRouter()

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({ pathname: path, query: query });
    }

    return <div className="flex p-4 flex-wrap bg-gray-100 justify-center">
        {filters.map((filter) => (
            <div className="w-44 m-2" key={filter.queryName}>
                <Select
                    onChange={(e) => {
                        searchProperties({[filter.queryName] : e.value})
                    }}
                    options={filter.items} />
            </div>
        ))}
    </div>
}

export default SearchFilter