import React from "react";

import Steps, {Step} from "rc-steps";
// import "rc-steps/assets/index.css";
// import "rc-steps/assets/iconfont.css";
import "./VerticalContainer.css"
import moment from "moment";
import ActivityCard from "./ActivityCard";
import data from "../../assets/datas/activities_demo.json"
export default class VerticalContainer extends React.PureComponent {

    calcule() {
        return moment().hour() - 9;

    }

    render() {
        return (
            <Steps direction="vertical" current={this.calcule()} status="error">
                <Step
                    title="09h00"
                    description={
                        <div className="div_ctn_cards">
                            <ActivityCard data={data.selectedSports[0]}/>
                            <ActivityCard data={data.selectedSports[1]}/>
                        </div>
                    }
                />
                <Step
                    title="10h00"
                    description={
                        <div className="div_ctn_cards">
                            <ActivityCard data={data.selectedSports[2]}/>
                            <ActivityCard data={data.selectedSports[3]}/>
                            <ActivityCard data={data.selectedSports[4]}/>
                        </div>
                    }
                    // description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="11h00"
                    description={
                        <div className="div_ctn_cards">
                            <ActivityCard data={data.selectedSports[5]}/>
                        </div>
                    }
                    // description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="12h00"
                    //  description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="13h00"
                    //   description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="14h00"
                    // description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="15h00"
                    // description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="16h00"
                    //   description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="17h00"
                    //  description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="18h00"
                    //   description="This is the first step on the process of whatever action you're doing."
                />
                <Step
                    title="19h00"
                    //   description="This is the first step on the process of whatever action you're doing."
                />


                {/*<Step*/}
                {/*    title="Download data"*/}
                {/*    description="Second step on this potentially long running task... please be patient"*/}
                {/*/>*/}
                {/*<Step title="Process data" description="Processing your data..."/>*/}
                {/*<Step title="Save file" description="Saving your file"/>*/}
            </Steps>
        );
    }
}
