import WidgetBlue from '../components/widgetEvents/WidgetBlue';
import WidgetRed from '../components/widgetEvents/WidgetRed';

const Home = () => {
    return (
        <>
            <div className={"home"}>
                <div className={"home-sub-1"}><span>AGEN</span></div>
                <div className={"home-sub-2"}><span>DA</span></div>
                <div className={"home-sub-3"}></div>
                <div className={"home-sub-4"}></div>
                <div className={"home-sub-5"}>
                    <span>DATE</span>
                </div>
                <div className={"home-sub-6"}>
                    <div className={"home-sub-5-first-input"}>
                        <input name={"date_start"} type="date"/>
                    </div>
                    <div className={"home-sub-5-second-input"}>
                        <input name={"date_end"} type="date"/>
                    </div>
                </div>
                <div className={"home-sub-7"}></div>
                <div className={"home-sub-8"}></div>
                <div className={"home-sub-9"}>
                    <span>EVENT</span>
                </div>
                <div className={"home-sub-10"}></div>
                <div className={"home-sub-11"}></div>
                <div className={"home-sub-12"}>
                    <div>
                        <select>
                            <option value="voile">VOILE</option>
                            <option value="football">FOOTBALL</option>
                        </select>
                    </div>
                </div>
            </div>
            <WidgetRed/>
            <WidgetBlue/>
        </>
    );
};

export default Home;