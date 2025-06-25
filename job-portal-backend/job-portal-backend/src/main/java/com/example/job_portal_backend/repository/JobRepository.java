package com.example.job_portal_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job_portal_backend.model.Job;

public interface JobRepository extends JpaRepository<Job, Long> {
	
}
