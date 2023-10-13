import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Button from "@mui/material/Button";

export const Maps = () => {
    return (
        <div className="relative w-72 max-xl:w-60 max-lg:w-44">
            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.539050171193!2d-38.31754828853469!3d-12.612602052644299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7165d872c390ef1%3A0xc92bb7d8112be08a!2sR.%20Santa%20Rita%20de%20C%C3%A1ssia%20-%20Santa%20Terezinha%2C%20Dias%20d&#39;%C3%81vila%20-%20BA%2C%2042850-000!5e0!3m2!1spt-BR!2sbr!4v1697231737763!5m2!1spt-BR!2sbr" loading="lazy" ></iframe>
            <div className="w-3/5 absolute right-0 bottom-0">
                <Button
                    variant="contained"
                    className="w-full bg-purple-700 hover:bg-purple-800"
                    href="https://maps.app.goo.gl/tahBuM9oDwtxAYDB6"
                    target="_blank"
                >
                    {<FmdGoodIcon />}Como chegar
                </Button>
            </div>
        </div>
    )
}