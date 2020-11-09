package com.kathir.parking.controller;

import com.kathir.parking.parkingClass.Info;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.kathir.parking.parkingClass.Parking;
import com.kathir.parking.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ParkingController {
    @Autowired
    private ParkingService parkingService;

    //get process from parking database
    @RequestMapping(value = "/parking",method = RequestMethod.GET)
    public List<Parking> getParkingList() {
        return parkingService.getParkingList();

    }

    //post process to parking database
    @RequestMapping(value = "/parking",method = RequestMethod.POST)
    public Parking createPark(@RequestBody Parking value) {
        return parkingService.createPark(value);

    }

    //get process from info database
    @RequestMapping(value = "/info",method = RequestMethod.GET)
    public List<Info> infoList() {

        return parkingService.getInfo();
    }

    //post process in info database
    @RequestMapping(value = "/info",method = RequestMethod.POST)
    public Info postInfo(@RequestBody Info value){

        return parkingService.postInfo(value);
    }

    //delete process in info database
    @RequestMapping(value = "/info/{id}", method = RequestMethod.DELETE)
    public String deleteRow(@PathVariable("id") Integer id ) {
        return parkingService.deleteRowInInfo(id);

    }

}
