package com.example.job_portal_backend.controller;

import com.example.job_portal_backend.model.Job;
import com.example.job_portal_backend.repository.JobRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobRepository repo;

    public JobController(JobRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/list")
    public List<Job> getAllJobs() {
        return repo.findAll();
    }

    @PostMapping
    public Job addJob(@RequestBody Job job) {
        return repo.save(job);
    }
    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable Long id) {
        repo.deleteById(id);
    }

}
