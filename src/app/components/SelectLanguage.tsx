import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SelectLanguageProps {
    languages: Language[];
    setSelectedLanguage: (language: string) => void;
}

interface Language {
    id: string;
    name: string;
    version: string;
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({ languages, setSelectedLanguage }) => {

    return (
        <Select
            onValueChange={(value) => setSelectedLanguage(value)}
        >
        <SelectTrigger className="w-[13vw]">
            <SelectValue placeholder="Select Language" />
        </SelectTrigger>
            <SelectContent className="bg-background text-muted">
                <SelectGroup>
                    <SelectLabel>Select Language</SelectLabel>
                    {languages.map((language) => (
                        <SelectItem key={language.id} value={language.id}>
                            {language.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};


export default SelectLanguage;