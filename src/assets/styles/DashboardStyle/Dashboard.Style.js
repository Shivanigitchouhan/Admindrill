const DashboardCSS = {


    root: {
        "--dark ": "#374151",
        "--darker": "#1F2937",
        "  --darkest ": " #111827",
        " --grey ": "#6B7280",
        "--pink ": "#EC4899",
        "--purple ": "#8B5CF6",
        " --light": "#EEE",
    },

    box1: {
        display: 'flex',
        marginLeft: '15%',
        marginTop: '3%',
    },

    box2: {
        overflow: "hidden",
        position: "absolute",
        top: "6%",
        marginLeft: "15%",
        //height: '55px',
    },

    divider: {
        border: '1px solid black !important',
          //width: '100% !important',
         // marginLeft: '-4.5% !important',
         // marginTop: ' -2% !important '
     },
 
    color: {
        borderRadius: '20px',
        marginLeft: '3% ',
        width: '13px',
        height: '18px',
    },

    // box2: {
    //     overflow: "hidden",
    //     position: "fixed",
    //     top: "6%",
    //     marginLeft: "5%",
    // },

    sideIcon: {
        margin: '6%'
    },

    DashboardBtn: {
        marginLeft: '-3% !important',
        width: '100%'
    },

    GamesBtn: {
        marginLeft: '-12% !important',
        width: '100%'
    },

    UsersBtn: {
        marginLeft: '-12% !important',
        width: '100%'
    },

    PlayersBtn: {
        marginLeft: '-2%  !important',
        width: '100%'
    },


    ProfileBtn: {
        marginLeft: '-4%  !important',
        width: '100%'
    },

    LogoutBtn: {
        marginLeft: '-10%  !important',
        width: '100%'
    },

    box3: {
        flexGrow: 1,
        bgcolor: 'background.default',
        padding: '20px !important',
        overflow: 'hidden !important'
    },

    customLink: {
        marginTop: '-50%  !important',
        marginLeft: '80%  !important',
        marginRight: '-15% !important',
        color: "#7569F1 !important",
        fontSize: "20px !important",
    },

    notification: {
        marginRight: 0,
        fontSize: "inherit",
        //marginTop: '0%  !important',
    },


    historyType: {
        fontWeight: 'bold !important',
        marginTop: '-6% !important',
        overflow: "hidden",
        marginLeft:'5% !important'
    },



    view: {
        marginTop: '-6% !important',
        color: "#7569F1 !important",
        fontSize: "13px !important",
        fontWeight: 'bold !important',
        marginLeft: '90%  !important',
        // background: 'linear-gradient(to right , #EC4899, #8B5CF6)',
        // WebkitTextFillColor: 'transparent',
        // WebkitBackgroundClip: 'text',
    },


    box5: {
        marginLeft: '1%  !important',
        marginTop: '1% !important',
        width: '73vw',
        height: 337,
        bgcolor: 'background.paper'
    },

    card: {
        minWidth: '75vw',
        height: '600px',
        marginTop: '-2%',
        marginLeft: '14%',
        marginRight: '-6%',
        marginBottom: '-9%',
        borderRadius: '20px !important',
        overflow: 'inherit !important',
        border: '1px solid gray'
    },
}
export default DashboardCSS;