import app from './api';
import MainDataSource from './configs/database/data-source';

const port = process.env.PORT || 3000;

async function main() {

    await MainDataSource.initialize();

    app.listen(port, () => {
        console.log(`Server is running on port ${app.get('port')}`);
    })
}

main();