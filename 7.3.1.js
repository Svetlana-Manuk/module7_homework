const user = {
    firm: "MMM",
    city: "Mytishy"
};

const worker = Object.create (user);
worker.ownCity = "Moscow";

function person(worker) {
    for (let key in worker) {

        if (worker.hasOwnProperty(key)) {

            console.log(`${key}: ${worker[key]}`);
        };

    };

};
person(worker);