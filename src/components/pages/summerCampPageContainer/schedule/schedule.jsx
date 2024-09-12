import DayPlan from "./dayPlan/dayPlan";
import ShiftDay from "./shiftDay/shiftDay";

const Schedule = (props) => {
    return (
        <>
            <ShiftDay shiftDayData={props.schedulesData.blueScheduleData} />
            <DayPlan dayPlanData={props.schedulesData.dayPlanData} />
        </>
    )
}

export default Schedule;