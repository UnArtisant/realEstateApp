import {Fragment} from "react";
import RcDrawer from 'rc-drawer';

function Drawer({
                                   className,
                                   children,
                                   closeButton,
                                   closeButtonStyle,
                                   drawerHandler,
                                   toggleHandler,
                                   open,
                                   width,
                                   placement,
                                   drawerStyle,
                                   closeBtnStyle,
                                   ...props
                               }) {
    return (
        <Fragment>
            <RcDrawer
                open={open}
                onClose={toggleHandler}
                placement={placement}
                width={width}
                handler={false}
                level={null}
                duration={"0.5s"}
                {...props}
                className={`drawer ${className || ''}`.trim()}
            >
                {closeButton && <div
                    style={closeBtnStyle}
                    onClick={toggleHandler}>
                    {closeButton}
                </div>}
                <div style={drawerStyle}>{children}</div>
            </RcDrawer>
            <div className="drawer__handler"
                 style={{display: 'inline-block'}}
                 onClick={toggleHandler}>
                {drawerHandler}
            </div>
        </Fragment>
    );
}

export default Drawer

Drawer.defaultProps = {
    width: '320px',
    placement: 'left',
};