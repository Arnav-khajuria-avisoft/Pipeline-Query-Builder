import React, { useState } from 'react';
import Select from 'react-select';

const attributes = [
    { value: 'container_id', label: 'container_id' },
    { value: 'container_name', label: 'container_name' },
    { value: 'severity_number', label: 'severity_number' },
    { value: 'body', label: 'body' },
    { value: 'trace_id', label: 'trace_id' },
    { value: 'span_id', label: 'span_id' },
    { value: 'trace_flags', label: 'trace_flags' },
    { value: 'severity_text', label: 'severity_text' }
];

const operations = [
    { value: '=', label: '=' },
    { value: '!=', label: '!=' },
    { value: '>', label: '>' },
    { value: '<', label: '<' },
    { value: '>=', label: '>=' },
    { value: '<=', label: '<=' },
    { value: 'contains', label: 'contains' }
];

const QueryFilter = () => {
    const [filters, setFilters] = useState([]);
    const [inputStage, setInputStage] = useState('attribute');
    const [selectedAttribute, setSelectedAttribute] = useState(null);
    const [selectedOperation, setSelectedOperation] = useState(null);
    const [value, setValue] = useState('');

    const addFilter = () => {
        if (selectedAttribute && selectedOperation && value) {
            setFilters([...filters, { attribute: selectedAttribute, operation: selectedOperation, value }]);
            resetInput();
        }
    };

    const resetInput = () => {
        setSelectedAttribute(null);
        setSelectedOperation(null);
        setValue('');
        setInputStage('attribute');
    };

    const removeFilter = (index) => {
        setFilters(filters.filter((_, i) => i !== index));
    };

    const handleAttributeSelect = (selected) => {
        setSelectedAttribute(selected);
        setInputStage('operation');
    };

    const handleOperationSelect = (selected) => {
        setSelectedOperation(selected);
        setInputStage('value');
    };

    return (
        <div className="search-bar h-[100vh] bg-gray-200 p-4">
            <div className="filter-inputs flex items-center flex-wrap p-2  rounded-md bg-white">
                {filters.map((filter, index) => (
                    <div key={index} className="filter-chip flex items-center space-x-1 p-1 rounded-md m-1">
                        <span>{`${filter.attribute.label} ${filter.operation.label} ${filter.value}`}</span>
                        <button
                            className="text-black text-[22px] "
                            onClick={() => removeFilter(index)}
                        >
                            &times;
                        </button>
                    </div>
                ))}
                <div className="flex-grow flex items-center">
                    {inputStage === 'attribute' && (
                        <Select
                            className="flex-1 min-w-[150px] m-1"
                            placeholder="Select Filter: select options from suggested values,for IN/NOT IN operators press 'ENTER' after selecting options "
                            options={attributes}
                            value={selectedAttribute}
                            onChange={handleAttributeSelect}
                        />
                    )}
                    {inputStage === 'operation' && (
                        <Select
                            className="flex-1 min-w-[150px] m-1"
                            placeholder="Select operation"
                            options={operations}
                            value={selectedOperation}
                            onChange={handleOperationSelect}
                        />
                    )}
                    {inputStage === 'value' && (
                        <input
                            type="text"
                            placeholder="Enter value"
                            className="p-2 border border-gray-400 rounded-md flex-1 min-w-[150px] m-1"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    addFilter();
                                }
                            }}
                        />
                    )}
                </div>
                {inputStage === 'value' && (
                    <button
                        className="border border-black p-2 rounded-md m-1"
                        onClick={addFilter}
                        disabled={!value}
                    >
                        Add
                    </button>
                )}
            </div>
        </div>
    );
};

export default QueryFilter;
