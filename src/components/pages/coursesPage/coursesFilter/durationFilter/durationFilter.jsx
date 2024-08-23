import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import { useState } from 'react';
import 'rc-tooltip/assets/bootstrap.css';
import 'rc-slider/assets/index.css';
import { useDispatch } from 'react-redux';
import { setDuration } from '../../../../../redux/CoursesPageReducers/coursePageFiltersReducer';

const Handle = (props) => {
    const { value, dragging, index, ...restProps } = props;

    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={`${value} месяцев`}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Slider.Handle value={value} {...restProps} />
        </Tooltip>
    );
};

const DoubleSliderFilter = () => {

    const dispatch = useDispatch();
    const [values, setValues] = useState([1, 24]);

    const handleChange = (newValues) => {
        setValues(newValues);
        dispatch(setDuration(newValues))
    };

    return (

        <div style={{ marginTop: "35px", marginLeft: "8px", width: "320px" }}>
            <div style={{ marginTop: '-20px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <span>от {values[0]} месяцев</span>
                <span>до {values[1]} месяцев</span>
            </div>
            <Slider
                range
                min={1}
                max={24}
                defaultValue={values}
                onChange={handleChange}
                handle={Handle}
                trackStyle={[{ background: 'linear-gradient(90deg, #f7941d 0%, #27aae1 100%)', height: 4 }]}
                handleStyle={[
                    {
                        borderColor: "orange",
                        backgroundImage: 'linear-gradient(90deg, #f7941d 0%, #27aae1 100%)',
                        opacity: 1,
                        borderWidth: 1,
                        transform: "none",
                        height: 20,
                        width: 20,
                        marginLeft: -10,
                        marginTop: -8
                    },
                    {
                        borderColor: "orange",
                        backgroundImage: 'linear-gradient(90deg, #f7941d 0%, #27aae1 100%)',
                        opacity: 1,
                        borderWidth: 1,
                        transform: "none",
                        height: 20,
                        width: 20,
                        marginLeft: -10,
                        marginTop: -8
                    }
                ]}
                railStyle={{ backgroundColor: '#ddd', height: 4 }}
            />
        </div>
    )
}

export default DoubleSliderFilter;