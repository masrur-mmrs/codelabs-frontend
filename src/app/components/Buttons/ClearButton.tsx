import React from 'react';
import { Button } from "@/components/ui/button";

interface ClearButtonProps {
    onClear: () => void;
}


const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {
    return (
        <Button
            onClick={onClear}
            variant="outline"
            size="lg"
            className="mr-2"
        >
            Clear
        </Button>
    );
};


export default ClearButton;