import './FilterForm.css';

import React, { FormEvent, useEffect, useState } from 'react';

import { Filters } from '../interfaces/Filters.interface';

interface FilterFormProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const colors = ['blue', 'red', 'yellow', 'green', 'silver', 'black', 'purple', 'gray', 'orange'];
const speedCriteria = ['less', 'more', 'between'];

const FilterForm: React.FC<FilterFormProps> = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState<Filters>({
    ...filters,
    hasPulseLaser: filters.hasPulseLaser || false
  });

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;

    if (type === 'radio') {
      const boolValue = value === 'true';
      setLocalFilters(prev => ({ ...prev, [name]: boolValue }));
    } else if (type === 'checkbox') {
      const newColors = checked ? [...localFilters.colors, value] : localFilters.colors.filter(color => color !== value);
      setLocalFilters(prev => ({ ...prev, colors: newColors }));
    } else {
      setLocalFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFilters(localFilters);
  };

  return (
    <form onSubmit={handleSubmit} className='filter-form'>
      <fieldset>
        <legend>Colors</legend>
        {colors.map(color => (
          <label key={color}>
            <input
              type='checkbox'
              name='colors'
              value={color}
              checked={localFilters.colors.includes(color)}
              onChange={handleChange as any}
            /> {color}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Speed Parameters</legend>
        <label htmlFor={'speed'}>Speed</label>
        <select id='speed' name='speedCriteria' value={localFilters.speedCriteria || ''} onChange={handleChange}>
          {speedCriteria.map(criteria => (
            <option key={criteria} value={criteria}>{criteria}</option>
          ))}
        </select>
        {localFilters.speedCriteria === 'between' ? (
          <>
            <label>
              Minimum Speed:
              <input
                type='number'
                name='minSpeed'
                placeholder='Min speed'
                value={localFilters.minSpeed || ''}
                onChange={handleChange}
              />
            </label>
            <label>
              Maximum Speed:
              <input
                type='number'
                name='maxSpeed'
                placeholder='Max speed'
                value={localFilters.maxSpeed || ''}
                onChange={handleChange}
              />
            </label>
          </>
        ) : (
          <label>
            {localFilters.speedCriteria === 'less' ? 'Maximum Speed:' : 'Minimum Speed:'}
            <input
                type='number'
                name={localFilters.speedCriteria === 'less' ? 'maxSpeed' : 'minSpeed'}
                placeholder={`Speed ${localFilters.speedCriteria === 'less' ? 'less than' : 'more than'}`}
                value={localFilters.speedCriteria === 'less' ? localFilters.maxSpeed || '' : localFilters.minSpeed || ''}
                onChange={handleChange}
            />
          </label>
        )}
      </fieldset>

      <fieldset>
        <legend>Pulse Laser</legend>
        <label>
          <input
              type='radio'
              name='hasPulseLaser'
              value='true'
              checked={localFilters.hasPulseLaser === true}
              onChange={handleChange}
          /> Has Pulse Laser
        </label>
        <label>
          <input
              type='radio'
              name='hasPulseLaser'
              value='false'
              checked={localFilters.hasPulseLaser === false}
              onChange={handleChange}
          /> Does Not Have Pulse Laser
        </label>
      </fieldset>

      <button type='submit'>Apply Filters</button>
    </form>
  );
};

export default FilterForm;
