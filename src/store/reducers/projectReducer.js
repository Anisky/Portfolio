import bio1 from '../../utils/biogardx-1.jpg';
import bio2 from '../../utils/biogardx-2.jpg';
import bio3 from '../../utils/biogardx-3.jpg';
import bio4 from '../../utils/biogardx-4.jpg';
import bio5 from '../../utils/biogardx-5.jpg';
import bio6 from '../../utils/biogardx-6.jpg';
import prim1 from '../../utils/primRecruit.PNG';
import prim2 from '../../utils/primRecruit-1.PNG';
import prim3 from '../../utils/primRecruit-2.PNG';
import prim4 from '../../utils/primRecruit-3.PNG';
import prim5 from '../../utils/primRecruit-4.PNG';
import qms1 from '../../utils/qms-1.jpg';
import gard1 from '../../utils/garduino.jpg';



const initState = {
    modalIsActive: false,
    currentModalId: 0,
    projects: [
        {
            id: [0],
            title: 'Recruitment Platform',
            project: 'Website',
            client: 'PrimRecruit',
            languages: 'JavaScript ,CSS , HTML, Python',
            preview: 'www.primrecrut.com',
            description :'This project is a hiring platform in which the companies post their job offers and the job seeker apply for jobs. The recruiters then schedules interviews for the profiles that match thier needs. and before that all the part must have an account in the platform to manage the search and hiring process.',
            pics: [
                prim1,
                prim2,
                prim3,
                prim4,
                prim5
            ]
        },
        {
            id: [1],
            title: 'BioGardX',
            project: 'Control System with Android App',
            client: 'Master s project',
            languages: 'JavaScript ,CSS , HTML, Python',
            preview: 'https://github.com/Anisky/FPGA_BASED_REAL_TIME_MONITORING_AND_CONTROL_SYSTEM_FOR_GREENHOUSES.git',
            description: "This project describes the design and implementation of an SoPC-based real time monitoring and control system for a Greenhouse, using the Field Programmable Gate Array (FPGA), to allow manual or automatic control of the environmental parameters inside the greenhouse, in order to suit the requirements of the plants growing inside it.For this purpose, an Android application has been created to allow the user to see the status of the greenhouse, and to manually control the actuators or to enter set points for the environmental parameters in the automatic mode.The prototype of the project consists of four main parts. The on-chip hardware, where the SoPC-based system is implemented using Nios II soft processor, on-chip memory, I/O peripherals and custom VHDL blocks. The off-chip hardware including actuators, driving units and data acquisition unit. The smartphone for the android application and a PC. The model was synthesized using Quartus II and targeted at Cyclone-II FPGA, the EP2C35",
            pics: [
                bio1,
                bio2,
                bio3,
                bio4,
                bio5,
                bio6
            ]
        },
        {
            id: [2],
            title: 'Queue Management System',
            project: 'Control System with Web Platform',
            client: 'Waha Industry',
            languages: 'Python, Javascript, html, css ',
            preview: '',
            description: 'This project is an automated a system that helps service provider to manage customers in efficient way using the Raspberry Pi model 3B and with led screens. It analyzes the queue status and take decision which customer to be served first. Also it tracks and evaluate employee and management performance. The system is connected to a clound server hosted in the raspberry pi in order to be monitored and controled easily and remotly.',
            pics: [qms1]
        },
        {
            id: [3],
            title: 'Garduino',
            project: 'Control System with Android App',
            client: 'Licence Project',
            languages: 'Java, C Arduino',
            preview: '',
            description: 'This project describes the design and implementation of an IoT real time monitoring and control system for a Greenhouse, using Arduinoin order to suit the requirements of the plants growing inside it. For this purpose, an Android application has been created to allow the user to see the status of the greenhouse, and to manually control the actuators or to enter set points for the environmental parameters in the automatic mode.The prototype of the project consists of four main parts. The on-chip hardware, where the SoPC-based system is implemented using Nios II soft processor, on-chip memory, I/O peripherals and custom VHDL blocks. The off-chip hardware including actuators, driving units and data acquisition unit. The smartphone for the android application and a PC',
            pics: [
                gard1
            ]
        },

    ]

};


const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':

            return {
                ...state,
                modalIsActive: true,
                currentModalId: action.playload
            };
        case 'CLOSE_MODAL':

            return {
                ...state,
                modalIsActive: false
            };
        default:
            return state;
    }
}


export default projectReducer;