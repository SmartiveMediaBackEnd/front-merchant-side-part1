
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormField from './field';

interface Option {
    id: string;
    name: string;
}

interface TagsProps {
    formStore: any;
    name: string;
    label?: string;
    options: Option[];
    onChange: (selectedIds: string[]) => void;
}

export default function AutoComplete({ formStore, name, label, options, onChange }: TagsProps) {
    const handleChange = (event: any, value: Option[]) => {
        const selectedIds = value.map(option => option.id);
        onChange(selectedIds);
    };

    return (
        <FormField
            formStore={formStore}
            name={name}
            label={label}
            render={(field) => (
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={options}
                    getOptionLabel={(option) => option.name}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            placeholder="Favorites"
                        />
                    )}
                />
            )}
        />
    );
}
