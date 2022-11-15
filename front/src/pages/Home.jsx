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
                </div>
                <div className={"home-sub-7"}></div>
                <div className={"home-sub-8"}></div>
                <div className={"home-sub-9"}>
                    <span>EVENT</span>
                </div>
                <div className={"home-sub-10"}></div>
                <div className={"home-sub-11"}>
                    <div>
                        <span>CATEGORIE:</span>
                        <select>
                            <option value="NATURE">NATURE</option>
                            <option value="CULTURE">CULTURE</option>
                            <option value="TRADITION">TRADITION</option>
                        </select>
                    </div>
                </div>
                <div className={"home-sub-12"}>
                    <div>
                        <select>
                            <option value="VOILE">VOILE</option>
                            <option value="FOOTBALL">FOOTBALL</option>
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