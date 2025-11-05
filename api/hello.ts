export default function handler(req, res) {
    res.status(200).json(
        {
            message: 'sup', 
            phoibe:
                {
                version: '0.3.2',
            },
            sentinel:
                {
                version: '1.1.0'
            }
        }
    );
}

